const User = ({ user, children }) => {
  return (
    <div>
      <ul>
        <li>{user.userName}</li>
      </ul>
      {children}
    </div>
  );
};

export default User;
