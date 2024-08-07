'use client'

import { styled } from '@mui/material/styles'
import React, { ComponentPropsWithoutRef, FC } from 'react'

const LoadingContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spin = styled('div')`
  display: inline-flex;
  width: 24px;
  height: 24px;
  animation: loadingSpinner 1s infinite linear;

  @keyframes loadingSpinner {
    100% {
      transform: rotate(360deg);
    }
  }
`

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  className?:string
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <LoadingContainer className={className}>
    <Spin>
      <SpinnerSvg />
    </Spin>
  </LoadingContainer>
)

const SpinnerSvg: FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={7}
      height={8}
      x={16}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#a)"
        d="m16.268 6.45 1.83-2.377A9.992 9.992 0 0 1 22 12h-3a6.992 6.992 0 0 0-2.732-5.55Z"
      />
    </mask>
    <g mask="url(#b)">
      <path fill="#FAFAFA" d="M1 1h22v22H1z" />
    </g>
    <mask
      id="d"
      width={11}
      height={10}
      x={12}
      y={12}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#c)"
        d="M12 19a7 7 0 0 0 7-7h3c0 .173-.005.348-.014.523-.28 5.34-4.7 9.481-9.986 9.477v-3Z"
      />
    </mask>
    <g mask="url(#d)">
      <path fill="#FAFAFA" d="M1 1h22v22H1z" />
    </g>
    <mask
      id="f"
      width={10}
      height={10}
      x={2}
      y={12}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#e)"
        d="M11.634 18.99c.123.006.245.01.366.01v3c-.173 0-.348-.005-.523-.014-5.34-.28-9.481-4.7-9.477-9.986h3a7 7 0 0 0 6.634 6.99Z"
      />
    </mask>
    <g mask="url(#f)">
      <path fill="#FAFAFA" d="M1 1h22v22H1z" />
    </g>
    <mask
      id="h"
      width={12}
      height={11}
      x={2}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="url(#g)"
        d="M12.367 5.01A7 7 0 0 0 5 12H2c0-.174.005-.348.014-.524.289-5.515 4.994-9.752 10.51-9.463a1.5 1.5 0 1 1-.157 2.996Z"
      />
    </mask>
    <g mask="url(#h)">
      <path fill="#FAFAFA" d="M1 1h22v22H1z" />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={19}
        x2={16}
        y1={12}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.08} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={12}
        x2={19}
        y1={19}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.35} />
        <stop offset={1} stopOpacity={0.08} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={5}
        x2={12}
        y1={12}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.65} />
        <stop offset={1} stopOpacity={0.35} />
      </linearGradient>
      <linearGradient
        id="g"
        x1={14}
        x2={5}
        y1={5}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0.65} />
      </linearGradient>
    </defs>
  </svg>
)
