const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`Chat icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
