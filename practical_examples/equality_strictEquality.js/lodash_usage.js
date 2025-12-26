// Este es un ejemplo de Lodash usando React
// Esta es la forma mas automatizada de comparar objetos.

// 1. Import using lodash en react:
import React, { useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';

// 2. Componente funcional
function SecurityAudit() {
    // 3. Hook useState ✓
    const [currentConfig, setCurrentConfig] = useState(null);
    
    // 4. Hook useEffect ✓
    useEffect(() => {
        const checkSecurityConfig = async () => {
            const config = await fetchSecurityConfig();
            
            const expectedConfig = {
                firewall: { enabled: true, rules: [] },
                encryption: { algorithm: 'AES-256', enabled: true },
                authentication: {
                    mfa: true,
                    passwordPolicy: {
                        minLength: 12,
                        requireSpecialChars: true
                    }
                }
            };
            
            if (!isEqual(config, expectedConfig)) {
                console.error('¡Configuración de seguridad incorrecta!');
                alertSecurityTeam(config, expectedConfig);
            }
            
            setCurrentConfig(config);
        };
        
        // Ejecutar inmediatamente
        checkSecurityConfig();
        
        // Luego cada hora
        const interval = setInterval(checkSecurityConfig, 3600000);
        
        // Cleanup al desmontar componente
        return () => clearInterval(interval);
    }, []);  // Dependencias vacías = solo al montar
    
    // 5. Renderizar UI
    return (
        <div>
            <h2>Security Status</h2>
            {currentConfig ? (
                <pre>{JSON.stringify(currentConfig, null, 2)}</pre>
            ) : (
                <p>Cargando configuración...</p>
            )}
        </div>
    );
}

// 6. Export para usar en otros componentes
export default SecurityAudit;
