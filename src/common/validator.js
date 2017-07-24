import LANG from '@/common/lang';


class FieldValidator {
  constructor($data, fieldName) {
    this.$data = $data;
    this.fieldName = fieldName;
  }

  required() {
    if (!this.$data[this.fieldName]) {
      this.error(LANG.ERROR.Required);
    }
    return this;
  }

  error(message, summary = true) {
    this.$data.error[this.fieldName] = message;
    if (summary) {
      this.summary(message);
    }
    return this;
  }

  summary(message, force = false) {
    this.$data.error.summary = force ? message : this.$data.error.summary || message;
    return this;
  }
}

class Validator {
  CACHE = {};

  constructor($data) {
    this.$data = $data;
  }

  reset() {
    this.$data.error = {};
  }

  field(fieldName) {
    let fieldValidator = this.CACHE[fieldName];
    if (!fieldValidator) {
      fieldValidator = new FieldValidator(this.$data, fieldName);
      this.CACHE[fieldName] = fieldValidator;
    }
    return fieldValidator;
  }

  summary(message, force = false) {
    this.$data.error.summary = force ? message : this.$data.error.summary || message;
    return this;
  }
}

function validator($data) {
  return new Validator($data);
}

export default validator;
