import fetchwp from "../lib/fetch_wp";

export function fetchCountries() {
  return fetchwp("countries")
    .then(res => (Array.isArray(res.data) ? res.data : []));
}

export function stripeToken(state) {
  return fetchwp("stripe_token", state.stripe).then(res => res.data);
}

export function stripeCharge(state) {
  const {
    contact,
    currency,
    amount,
    donation_type,
    trial_period_days = 0,
    stripe: { token }
  } = state;

  const data = {
    ...contact,
    currency,
    amount,
    donation_type,
    trial_period_days,
    stripe_token: token
  };

  return fetchwp("stripe_charge", data);
}

export function storeConvertLoop(props, state) {
  console.log("storeConvertLoop", props, state);
  const add_tags = typeof props.tags == "string"
    ? props.tags.trim().split(",")
    : [];

  const data = { ...state.contact, add_tags };
  return fetchwp("convertloop_contact", data);
}

export function storeEventConvertLoop(state) {
  const { email, country } = state.contact;

  const metadata = {
    amount: state.amount,
    type: state.donation_type
  };

  const event = {
    name: `Donation-${state.donation_type}`,
    person: { email },
    country,
    metadata
  };

  return fetchwp( "convertloop_event", event);
}

export function storeInfusion(state) {
  let tags = "";
  if (state.donation_type == "monthly") tags = ["870", "924"];
  if (state.donation_type == "once") tags = ["868", "926"];
  const data = { ...state.contact, tags };
  return fetchwp( "infusion_contact", data);
}
