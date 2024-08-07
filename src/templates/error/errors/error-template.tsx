import React, { FC } from 'react'

import { ErrorSizes } from '../error.styled'
import { Error } from '../error'

enum ErrorEnum {
  ERROR_404 = 'error404',
  NOT_FOUND_ERROR = 'notFoundError',
  FETCH_DATA_ERROR = 'fetchDataError',
}

interface ErrorTemplateProps {
  type: keyof typeof ErrorEnum,
  size?: keyof typeof ErrorSizes,
}

const errorTypes = {
  error404: {
    icon: '/assets/errors/dataFetchError.png',
    title: 'Ошибка 404',
    subtitle: 'Нет такой страницы',
  },
  notFoundError: {
    icon: '/assets/errors/notFoundError.png',
    title: 'Ничего не найдено',
    subtitle: 'Измените запрос',
  },
  fetchDataError: {
    icon: '/assets/errors/dataFetchError.png',
    title: 'Не удалось получить данные',
    subtitle: 'Повторите попытку позже',
  },
}

export const ErrorTemplate: FC<ErrorTemplateProps> = ({ type, size }) => (
  <Error
    icon={errorTypes[ErrorEnum[type]].icon}
    title={errorTypes[ErrorEnum[type]].title}
    subtitle={errorTypes[ErrorEnum[type]].subtitle}
    size={size}
  />
)
