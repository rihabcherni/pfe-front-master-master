import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription , MdPhoto} from "react-icons/md";
import StepWizard from "react-step-wizard";
import DialogAddUpdate from "./DialogAddUpdate";
const ActionButtons = (props) => {
  const handleBack = () => { props.previousStep(); };
  const handleNext = () => {  props.nextStep();};
  const handleFinish = () => {  props.lastStep();};

  return (
      <div>
        {props.currentStep > 1 && (
           <button onClick={handleBack}>Back</button> 
        )}
        <div>
          {props.currentStep < props.totalSteps && (
            <button onClick={handleNext}>Next</button>
          )}
          {props.currentStep === props.totalSteps && (
            <button onClick={handleFinish}>Finish</button>
          )}
        </div>
      </div>
  );
};

const One = (props) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");
  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setInfo1((info1) => ({...info1,[targetName]: targetValue }));
  };
  const validate = () => {
    if (!info1.name) setError("Name is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info1);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Détails </h1>
        <label>Name: </label>
        <input type="text" name="name"  placeholder="Enter your name" onChange={onInputChanged}/>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  const validate2 = () => {
    if (!info2.age) setError("Age is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 2 content</h1>
        <label>
          Welcome <b>{props.user.name || ""}</b>
        </label>
        <label>Age: </label>
        <input
          type="text"
          name="age"
          placeholder="Enter your age"
          onChange={onInputChanged}
        />
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  console.log(props.user);
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const StepForm = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const assignStepWizard = (instance) => { setStepWizard(instance);};
  const assignUser = (val) => {setUser((user) => ({ ...user, ...val }));};
  const handleStepChange = (e) => {setActiveStep(e.activeStep - 1);};
  const handleComplete = () => { alert("You r done. TQ");};
  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Personal Detail" children={<MdDescription />} />
        <Step label="Photo" children={<MdPhoto />} />
        <Step label="Confirmation" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};
export default StepForm;