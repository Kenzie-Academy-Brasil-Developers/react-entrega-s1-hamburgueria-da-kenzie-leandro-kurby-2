import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const notifyError = (text) => toast.error(text);

export const notifyWarning = (text) => toast.warn(text);

export const notifySuccess = (text) => toast.success(text);

export const notifyInfo = (text) => toast.info(text);