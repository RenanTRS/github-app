import styled from 'styled-components'

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  color: ${(props) => props.theme.color.font};

  img {
    border: 0.5rem solid ${(props) => props.theme.border.img};
    border-radius: 100%;

    width: 25rem;
    max-width: 100%;
  }
`

export const Creadential = styled.div`
  margin-top: 1rem;

  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  a {
    display: block;

    color: ${(props) => props.theme.color.font};
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;

    margin-top: 0.5rem;
  }
`
export const InfoUser = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.5rem;

    /* svg {
      width: 5rem;
    } */
  }
`
