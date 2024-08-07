import React, { FC, ReactNode } from 'react'

import { Circle, Title, StepsInfoContainer } from './steps-info.styled'

export interface StepsInfoProps {
  list: Array<string | ReactNode>
}

export const StepsInfo: FC<StepsInfoProps> = ({ list }) => (
  <StepsInfoContainer>
    {list?.map((item, index) => (
      <Title key={index}>
        <Circle aria-hidden>{index + 1}</Circle>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '226px',
        }}
        >
          {item}
        </div>
      </Title>
    ))}
  </StepsInfoContainer>
)
