import React from "react";
import Radium, { StyleRoot } from "radium";

const GalleryHeader = React.createClass({
  getInitialState() {
    return { 
			section: 0,
			imageStyle: {
				maxWidth: "100%", 
				display: 'block', 
				margin: '0 auto'
			} 
		};
  },

  getDefaultProps() {
    return { images: [], excerpts: [], texts: {} };
  },

  componentDidMount() {
		//side effect, but necessary
    let nav = document.querySelector(".nav");
    nav.style.background = "rgb(34, 34, 34)";
  },

  changeSection(type, e) {
    if (e) e.preventDefault();
    let section = this.state.section;
    if (type == "next")
      section = this.state.section < this.props.images.length - 1
        ? this.state.section + 1
        : 0;
    if (type == "prev")
      section = this.state.section > 0 ? this.state.section - 1 : 0;
    this.setState({ section });
  },

	getImage(e) {
		let imageStyle;
		if(e.target.height > e.target.width) {
			imageStyle = {...this.state.imageStyle, maxWidth: '45%'};
			this.setState({imageStyle});
		} else {
			imageStyle = {...this.state.imageStyle, maxWidth: '100%'};
			this.setState({imageStyle});
		}
	},

  render() {
    const { images, excerpts } = this.props;
    const h = window.innerHeight - 100;
    const w = window.innerHeight;

    const btnsStyle = {
      float: 'right',
      marginTop: '7px'
    };

    const btnStyle = {
      border: "1px solid #fff",
      background: "transparent",
      width: "40px",
      height: "40px",
      borderRadius: "0",
      padding: "0",
			':hover': {
				background: 'rgba(255, 255, 255, .2)'
			}
    };

    const linkLeft = {
      position: "absolute",
      height: "100%",
      top: "0",
      bottom: "auto",
      left: 0,
      width: "50%"
    };

    const linkRight = { ...linkLeft, left: "auto", right: 0 };

    const mainStyle = {
      height: `${h}px`,
      background: "#222",
      position: "relative",
      overflow: "hidden",
      "@media(max-width: 767px)": { margin: "0 -20px" },
    };

    const viewportStyle = {
      height: `${h}px`,
    };

    const excerptStyle = {
      color: "#fff",
      marginTop: "20px",
      display: "block",
      textShadow: "2px 2px 2px #222",
    };

		const shareBtn = {
			color: '#fff',
			width: '30px',
			height: '30px',
			borderRadius: '30px',
			textAlign: 'center',
			display: 'block',
			border: '1px solid #fff',
			padding: '5px',
      fontSize: '12px',
			':hover': {
				background: 'rgba(255, 255, 255, .2)'
			}
		};

    const liStyle = {display: 'inline-block', marginLeft: '5px'};

    return (
      <StyleRoot>
        <div style={mainStyle}>
          <div style={viewportStyle}>
            <div style={{ maxWidth: w, margin: '0 auto', padding: '0 20px' }}>
              <h5 style={{ color: "#fff", marginBottom: "20px" }}>
                {this.props.texts.gallery} <i className="ion-camera" />
              </h5>
              <div
                className="gallery-header__item"
                style={{ position: "relative" }}
              >
                <img
									onLoad={this.getImage}
                  src={images[this.state.section]}
                  style={this.state.imageStyle}
                />

                <div style={{width: '100%', float: 'left'}}>
                  <span style={excerptStyle}>{excerpts[this.state.section]}</span>
                </div>
        
                <div style={{width: '100%',float:'left', marginTop: '10px'}}>
                <ul style={{listStyle: 'none', padding: '0', float: 'left'}}>
                    <li style={liStyle}>
                      <a key={1} style={shareBtn} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                      <i className="ion-social-facebook"></i></a>
                    </li>
                    <li style={liStyle}>
                      <a key={2} style={shareBtn} href={`https://twitter.com/intent/tweet?text=${window.location.href}`}>
                      <i className="ion-social-twitter"></i></a>
                    </li>
                    <li style={liStyle}>
                      <a key={3} style={shareBtn} href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}>
                      <i className="ion-social-linkedin"></i></a>
                    </li>
                    <li style={{...liStyle, display: 'none', '@media(max-width: 767px)': {display: 'inline-block'} }}>
                      <a key={4} style={shareBtn} href={`whatsapp://send?text=${window.location.href}`}>
                        <i className="ion-social-whatsapp-outline"></i>
                      </a>
                    </li>
                  </ul>
                  <div style={{float: 'right', marginTop: '7px'}}>
                    <span style={{ color: "#fff", paddingRight: "10px" }}>
                      {this.state.section + 1} {this.props.texts.of} {images.length}
                    </span>
                    <button
                      key={'btn-1'}
                      onClick={this.changeSection.bind(null, "prev")}
                      style={btnStyle}
                    >
                      <i className="ion-chevron-left" />
                    </button>
                    <button
                      key={'btn-2'}
                      onClick={this.changeSection.bind(null, "next")}
                      style={btnStyle}
                    >
                      <i className="ion-chevron-right" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
      
        </div>
      </StyleRoot>
    );
  },
});

export default GalleryHeader;
