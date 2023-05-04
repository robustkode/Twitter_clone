import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container bg-secondary m-4">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <h2>Sign in to Tellit</h2>
        <form action="" className="d-flex flex-column mt-3">
          <input
            type="text"
            placeholder="username"
            className="mb-3 bg-light p-2 border border-success text-warning"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="email"
            className="mb-3 bg-light p-2 border border-success text-warning"
          />
          <button className="btn btn-primary my-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
