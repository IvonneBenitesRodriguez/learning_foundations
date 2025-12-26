//App.js
import React from 'react';
import SecurityAudit from './SecurityAudit';

function App() {
    return (
        <div className="App">
            <h1>Dashboard de Seguridad</h1>
            
            {/* Aquí se renderiza el componente */}
            <SecurityAudit />
        </div>
    );
}

export default App;
