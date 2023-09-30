import React, { useState } from "react"
import Datepicker from "tailwind-datepicker-react"
import { type IOptions } from "tailwind-datepicker-react/types/Options"

interface IDatePickerProps {
  changeDate: (date: string) => void;
}

const InputDate: React.FC<IDatePickerProps> = ({ changeDate }) => {
  const options: IOptions = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    theme: {
      background: "bg-white",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-gray-200",
      input: "",
      inputIcon: "",
      selected: ""
    },
    icons: {
      prev: () => <span>{"<"}</span>,
      next: () => <span>{">"}</span>
    },
    datepickerClassNames: "top-30",
    defaultDate: null,
    language: "en"
  };

  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    changeDate(selectedDate.toString());
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <>
      <div className="flex flex-col items-center">
          <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
      </div>
    </>
  );
};

export { InputDate }
