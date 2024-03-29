import React from "react";

type FormInputProps = {
  type: "number";
  name: string;
  inputIcon: React.FC;
  assignMeasurements: (name: string, measurement: number) => void;
};

type LabeledInputProps = FormInputProps & {
  label: string;
};

type FormBodyProps = {
  assignMeasurements: (name: string, measurement: number) => void;
};

type ResultProps = { BMI: number };

export type { FormInputProps, LabeledInputProps, FormBodyProps, ResultProps };
