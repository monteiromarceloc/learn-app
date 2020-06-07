import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 50%;
  max-width: 420px;
  min-width: 280px;
  height: 42px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 21px;
  padding: 6px;
  margin-bottom: 20px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ItemContainer = styled.button`
  width: 100%;
  max-width: 600px;
  min-width: 280px;
  height: 120px;
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 16px;
  margin-bottom: 14px;
  
  display: flex;
  flex-direction: row;
  @media (max-width: 630px) {
    height: 100px;
  }
  `

export const ItemInfo = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const ItemImg = styled.img`
  height: 120px;
  min-width: 120px;
  width: 120px;
  object-fit: cover;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  @media (max-width: 630px) {
    height: 100px;
    min-width: 100px;
    width: 100px;
  }
`

export const Label = styled.p`
  background-color: transparent;
  font-size: 16px;
  color: #ccc;
`

export const ActionLabel = styled.button`
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  color: #61dafb;
  margin-top: 12px;
`

export const List = styled.div`
  min-height: 80px;
`
