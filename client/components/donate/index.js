import React, { Component } from "react";
import request from "axios";
import qs from "qs";
import Amount from "./amount";
import CreditCard from "./creditCard";
import Contact from "./contact";
import FourStep from "./four";
import * as actions from "../../actions/donate";
import { storeEvent } from "../../lib/events";

function isAllValid(errors = {}) {
  return Object.keys(errors).every(key => errors[key] == true);
}

class Donate extends Component {
  static defaultProps = { texts: {}, redirect: {} };

  state = {
    section: 0,
    left: 0,
    loading: false,
    donation_type: "monthly",
    amount: 30,
    currency: "usd",
    contact: { name: "", email: "", country: "" },
    stripe: {
      card_type: "",
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      token: ""
    },
    errors: { stripe: {}, contact: {} },
    is_blue: false,
    show_four_step: false,
    show_titles: true
  };

  componentDidMount() {
    this.donateForm.addEventListener("keydown", e => {
      if (e.which == 9) {
        e.preventDefault();
        this.nextSection();
      }
    });
  }

  handleChange = field => {
    this.setState({ ...this.state, ...field });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.nextSection();
  };

  completeTransaction = (stripeResponse = {}) => {
    const { amount, donation_type, contact } = this.state;
    const base = this.props.redirect[donation_type];
    const { customer, id } = stripeResponse;

    this.setState({loading: true});

    actions
      .storeConvertLoop(this.props.tags, this.state.contact)
      .then(() => {
        const l = bs.currentPageLang == "Español" ? "SP" : "EN";
        const event = {
          category: "DONATION",
          action: "DONATION_MONTHLY",
          label: `DONATION_${l}`,
          value: amount
        };
        console.log("ga", event);
        storeEvent("ga_event", event);
      })
      .then(() => {
        const event = {
          name: `Donation ${donation_type}`,
          person: contact,
          metadata: {
            amount,
            type: donation_type,
            url: window.location.href
          }
        };
        console.log("cl", event);
        return storeEvent("cl_event", event);

      })
      .then(() => {
        const event = {
          eventName: "Purchase",
          content: { value: amount, currency: "USD" }
        };
        console.log("fb", event);
        return storeEvent("fb_event", event);
      })
      .then(res => {
         if (donation_type == "monthly") {
          const url = `${base}?customer_id=${contact.email}-${id}&order_revenue=${amount}&order_id=${id}`;
          window.location = url;
        } else {
          this.setState({show_four: true});
          this.props.changeSection(1);
        }
      });
  };

  creditCardIsValid = () => {
    let errs = this.creditCard.validateAll();
    return isAllValid(errs.stripe);
  };

  contactIsValid = () => {
    let errs = this.contact.validateAll();
    return isAllValid(errs.contact);
  };

  nextSection = () => {
    let section = this.state.section < 2 ? this.state.section + 1 : 2;

    if (this.state.section == 1) {
      if (!this.creditCardIsValid()) return false;

      actions.stripeToken(this.state).then(res => {
        if (res.id) {
          const stripe = { ...this.state.stripe, token: res.id };
          this.setState({ ...this.state, stripe });
          return stripe;
        }

        if (res.stripeCode) {
          this.setState({ ...this.state, loading: false, declined: true });
        }
      });
    }

    if (this.state.section == 2) {
      if (!this.contactIsValid()) return false;
      actions
        .stripeCharge(this.state)
        .then(res => this.completeTransaction(res.data));
    }

    let left = `-${section * 100}%`;

    if (this.state.section == 0) {
      this.setState({ section, left, loading: false });
    } else {
      this.setState({ section, left });
    }
  };

  prevSection = e => {
    e.preventDefault();
    let section = this.state.section >= 0 ? this.state.section - 1 : 0;
    let left = `-${section * 100}%`;
    this.setState({ section, left });
  };

  render() {
    let sectionWidth = `${100 / 3}%`;
    let viewPortStyle = { width: "300%", left: this.state.left };
    let donationTypeStyle = {
      display: "inline",
      marginLeft: "15px",
      color: this.props.is_blue ? "rgb(60, 81, 95)" : "#fff"
    };

    let backBtnStyle = {
      float: "right",
      background: "transparent",
      border: "none",
      padding: "0 20px",
      color: this.props.is_blue ? "rgb(60, 81, 95)" : "#fff"
    };

    return (
      <div>

      <form
        onSubmit={this.handleSubmit}
       className={ this.props.is_blue ? "donate_react donate_inline" : "donate_react" }
       style={this.state.show_four ? { display: "none" } : { display: "block" }}
      ref={donate => (this.donateForm = donate)}
      >
        <div className="donate_react__viewport" style={viewPortStyle}>

          <Amount
            {...this.state}
            {...this.props}
            width={sectionWidth}
            onChange={this.handleChange}
          />

          <CreditCard
            ref={creditCard => (this.creditCard = creditCard)}
            {...this.state}
            {...this.props}
            width={sectionWidth}
            onChange={this.handleChange}
          />

          <Contact
            ref={contact => (this.contact = contact)}
            {...this.state}
            {...this.props}
            width={sectionWidth}
            onChange={this.handleChange}
          />

        </div>

        <div className="form-group">
          <button
            className="donate_react__submit pull-left"
            onClick={this.handleSubmit}
            disabled={this.state.loading}
          >
            {this.state.section == 1
              ? this.props.texts.next
              : this.props.texts.donate}
          </button>
          <span style={donationTypeStyle}>
            {`${this.state.amount} USD ${this.props.texts[this.state.donation_type]}`}
          </span>
          {this.state.section > 0
            ? <button style={backBtnStyle} onClick={this.prevSection}>
                {this.props.texts.back}
              </button>
            : ""}
        </div>
        <div
            style={
              this.state.declined
                ? {
                    display: "block",
                    background: "red",
                    color: "#fff",
                    float: "left",
                    width: "100%",
                    padding: "10px"
                  }
                : { display: "none" }
            }
          >
           {this.props.texts.validation_declined}
          </div>
      </form>
       <FourStep {...this.props} {...this.state}  />

      </div>
    );
  }
}

export default Donate;
