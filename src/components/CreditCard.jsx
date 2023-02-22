
function CreditCard(props) {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = props;
    const lastFourDigits = number.slice(-4);
    const cardTypeImage =
      type === "Visa"
        ? "../assets/images/visa.png"
        : "../assets/images/master-card.svg";
  
    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      padding: "20px",
      borderRadius: "15px",
      height: "200px",
      width: "350px",
      backgroundImage: `url(${cardTypeImage})`,
    };
  
    return (
      <div style={cardStyle}>
        
        <div style={{ fontSize: "40px", justifyContent: "flexstart", marginBottom: "-30px", marginTop: "-30px" }}>
          <p>**** **** **** {lastFourDigits}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flexstart", marginBottom: "-30px" }}>
          <p>{`Expires ${expirationMonth}/${expirationYear}`}</p>
          <p>{bank}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flexstart", marginBottom: "50px" }}>
          <p>{owner}</p>
        </div>
      </div>
    );
  }
  
  export default CreditCard;