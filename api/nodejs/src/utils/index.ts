import { ErrorMessages, FormattedError, ValidatorKey  } from "./interfaces";

type getUserFieldDescriptions = (field: string) => string;

const errorMessagesMap = (getUserFieldDescriptions: getUserFieldDescriptions, validatorKey: ValidatorKey, field: string, message: string): string => {
  const errorTypes = {
    "is_null": `O campo ${getUserFieldDescriptions(field)} não pode ficar vazio`,
    "isEmail": `O campo ${getUserFieldDescriptions(field)} é inválido`,
    "min": `O campo ${getUserFieldDescriptions(field)} não pode ser menor do que 0`,
    "max": `O campo ${getUserFieldDescriptions(field)} não pode ser maior do que 150`,
    "not_unique": `O ${getUserFieldDescriptions(field)} preenchido já está sendo utilizado`
  };

  return errorTypes[validatorKey] ? errorTypes[validatorKey] : message;

};

export const httpErrors = {
  getMessage: (errorKey: string, module: string): string => {
    const errors: ErrorMessages = {
      "MESSAGE_ERRORS": `Erro ao salvar ${module}`,
      "MESSAGE_NOT_FOUND": `${module} não encontrado`,
      "MESSAGE_ALREADY_EXISTS": `{${module}} já registrado com este email`,
      "MESSAGE_UNKNOWN_ERROR": `Erro desconhecido em ${module}`,
      "MESSAGE_DELETED": `${module} apagado com sucesso`,
    };

    const message = errors[errorKey];

    return message || "Ocorreu um erro inesperado";
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatSequelizeErrorItems = (getUserFieldDescriptions: getUserFieldDescriptions, errorItems: any[]): FormattedError[] => {
  const errorFields: Record<string, string[]> = {};

  errorItems.forEach((item) => {
    const { path, validatorKey, message } = item;
    const field = path || "undefined";
    errorFields[field] = [errorMessagesMap(getUserFieldDescriptions, validatorKey, field, message)];
  });

  const formattedErrors: FormattedError[] = Object.keys(errorFields).map((field) => ({
    field,
    errors: errorFields[field],
  }));

  return formattedErrors;
};

export const textToSlug = (text: string): string => {
  let slug = text.toLowerCase();
  slug = slug.replace(/\s+/g, "-");
  slug = slug.replace(/[^a-z0-9-]/g, "");
  slug = slug.replace(/-+/g, "-");

  return slug;
};