const DEBUG = process.env.NODE_ENV === "development";

export const logger = {
  debug: (...args: any[]) => {
    if (DEBUG) {
      console.debug("[DEBUG]", ...args);
    }
  },
  info: (...args: any[]) => {
    if (DEBUG) {
      console.info("[INFO]", ...args);
    }
  },
  error: (...args: any[]) => {
    console.error("[ERROR]", ...args);
  },
};
