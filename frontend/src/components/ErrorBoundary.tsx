import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem', fontFamily: 'monospace', background: '#fff0f0',
          color: '#c00', minHeight: '100vh', whiteSpace: 'pre-wrap'
        }}>
          <h1>⚠ Runtime Error</h1>
          <p><strong>{this.state.error?.name}</strong>: {this.state.error?.message}</p>
          <pre style={{ fontSize: '0.85em', marginTop: '1rem', color: '#333' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
