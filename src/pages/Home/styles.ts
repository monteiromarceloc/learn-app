import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 50%;
  max-width: 420px;
  min-width: 280px;
  height: 42px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 18px;
  padding: 6px 10px 6px 16px;
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
  height: 150px;
  box-sizing: border-box;
  background-color: #e8e8e8;
  border-radius: 11px;
  margin-bottom: 21px;
  padding: 12px;
  
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  h2 {
    text-align: left;
  }
  p {
    margin-top: 6px;
  }
`

export const ItemImg = styled.img`
  height: 100%;
  width: auto;
  max-width: 120px;
  max-width: 126px;
  object-fit: cover;
  /* border-radius: 2px; */
`

export const Label = styled.p`
  font-size: 16px;
  color: #e8e8e8;
`

export const ActionLabel = styled.button`
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  color: #00BBB0;
  margin-top: 12px;
`

export const List = styled.div`
  min-height: 42px;
`

export const TagList = styled.div`
  display: flex;
  background-color: transparent;
`

export const Tag = styled.button`
  background-color: #00BBB0;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 6px;
  margin: 5px;
`;