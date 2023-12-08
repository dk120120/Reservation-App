import "./MailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <div className="mailBox">
        <input type="email" placeholder="Your Email" />
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
