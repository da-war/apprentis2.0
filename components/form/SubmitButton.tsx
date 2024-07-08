import React from "react";

import { useFormikContext } from "formik";
import AppButton from "../AppButton";

interface SubmitButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  style?: object;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  color,
  textColor,
  style,
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color={color}
      titleStyle={{ color: textColor }}
      style={style}
      {...otherProps}
    />
  );
};

export default SubmitButton;
