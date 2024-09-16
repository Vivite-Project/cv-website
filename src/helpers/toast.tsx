import React from "react";
import { Slide, toast } from "react-toastify";

import ErrorIcon from "@assets/icons/errorIcon";
import ValidIcon from "@assets/icons/validIcon";

const CustomErrorToast = ({ content }: { content: string }) => (
  <div className="flex items-center gap-4">
    <ErrorIcon className="h-6 w-6 min-w-6 flex-grow fill-red-400" />
    <span className="w-full text-base font-semibold leading-normal tracking-tight text-zinc-100">
      {content}
    </span>
  </div>
);

export const toastError = (content: string) => {
  toast.error(<CustomErrorToast content={content} />, {
    icon: false,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    className: "bg-zinc-800",
    bodyClassName:
      "text-base font-semibold tracking-tight text-zinc-100 leading-normal",
    progressClassName: "bg-red-400",
  });
};

const CustomSuccessToast = ({ content }: { content: string }) => (
  <div className="flex items-center gap-4">
    <ValidIcon className="h-6 w-6 min-w-6 fill-teal-400" />
    <span className="w-full text-base font-semibold leading-normal tracking-tight text-zinc-100">
      {content}
    </span>
  </div>
);

export const toastSuccess = (content: string) => {
  toast.success(<CustomSuccessToast content={content} />, {
    icon: false,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    className: "bg-zinc-800",
    bodyClassName:
      "text-base font-semibold tracking-tight text-zinc-100 leading-normal",
    progressClassName: "bg-teal-400",
  });
};
