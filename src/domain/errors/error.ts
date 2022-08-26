export type Err = {
  message: string;
  innerError: Err | null;
};
