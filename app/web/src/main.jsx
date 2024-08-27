import { createRoot } from 'react-dom/client';
import { Button } from './components/ui/button';
import './globals.css';

function App () {
  return (
    <div className='p-2'>
      <h1>Hello world</h1>
      <Button size="lg">LOGIN</Button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
)
