const formatTime = (dateString: string) => {
  const updatedDate = new Date(dateString);
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - updatedDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "opened today";
  }
  if (diffDays === 1) {
    return "opened 1 day ago";
  } else {
    return `opened ${diffDays} days ago`;
  }
};

export default formatTime;
