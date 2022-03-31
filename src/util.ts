let id = new Date().getMilliseconds();

export const obterId = (): number => {
  return id++;
} 