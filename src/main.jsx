import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // 개발환경에서만 활성화, 배포 환경에서는 비활성화
  // 모든 react 페이지들, 기능들, 전부 이곳에서 가상의 dom으로 렌더링 됨. index.html의 root div에 렌더링 됨.
  <StrictMode> 
    <App />
  </StrictMode>,
)
