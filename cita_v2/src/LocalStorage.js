export const obtenerStateStorage = () => {
  const citasStorage = localStorage.getItem("citas");
  if (citasStorage === null) {
    return undefined;
  }
};

export const guardarStateStorage = (state) => {
  const citasState = JSON.stringify(state);
  localStorage.setItem("citas", citasState);
};
