import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeValidateTokenControllerFactory } from "../../factories/controllers/validateToken-controller-factory";

export function Validator() {
  const navigate = useNavigate();
  const validator = makeValidateTokenControllerFactory();

  useEffect(() => {
    validator.validate(validate);
  }, []);

  function validate(result: boolean) {
    if (!result) {
      navigate("/login");
    }
  }

  return <></>;
}
