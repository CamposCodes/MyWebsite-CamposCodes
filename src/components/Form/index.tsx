import * as C from "./styles";

const Form = () => {
  return (
    <C.Container>
      <C.Area>
        <C.Form>
          <label>
            Your name
            <input type="text" autoFocus/>
          </label>
          <label>
            Your e-mail
            <input type="email" autoFocus/>
          </label>
          <label>
            Message
            <textarea placeholder="Your message on here "/>
          </label>
        </C.Form>
      </C.Area>
    </C.Container>
  );
};

export default Form;
