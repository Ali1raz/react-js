export default function Loading() {
  const styles = {
    width: "80px",
    height: "80px",
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <span
        className="spinner-border border-5 text-light"
        style={styles}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </span>
    </div>
  );
}
