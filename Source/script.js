document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tool buttons
    document.getElementById('phishingBtn').addEventListener('click', () => {
        const url = document.getElementById('phishingUrl').value.trim();
        if (url) analyzePhishing(url);
    });
    
    document.getElementById('sslBtn').addEventListener('click', () => {
        const url = document.getElementById('sslUrl').value.trim();
        if (url) validateSSL(url);
    });
    
    document.getElementById('reputationBtn').addEventListener('click', () => {
        const domain = document.getElementById('reputationDomain').value.trim();
        if (domain) checkReputation(domain);
    });
    
    document.getElementById('malwareBtn').addEventListener('click', () => {
        const url = document.getElementById('malwareUrl').value.trim();
        if (url) scanForMalware(url);
    });
    
    document.getElementById('domainAgeBtn').addEventListener('click', () => {
        const domain = document.getElementById('domainAgeDomain').value.trim();
        if (domain) checkDomainAge(domain);
    });
    
    document.getElementById('whoisBtn').addEventListener('click', () => {
        const domain = document.getElementById('whoisDomain').value.trim();
        if (domain) whoisLookup(domain);
    });
    
    // Add enter key functionality for all input fields
    document.querySelectorAll('.tool-input input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const button = this.parentElement.querySelector('button');
                if (button) button.click();
            }
        });
    });
    
    // Tool functions
    function analyzePhishing(url) {
        const resultElement = document.getElementById('phishingResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Analyzing URL...</span></div>';
        
        // Simulate API call
        setTimeout(() => {
            const isPhishing = Math.random() > 0.7; // 30% chance of being phishing
            const confidence = Math.floor(Math.random() * 40) + 60; // 60-99% confidence
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">URL Analyzed:</span>
                        <span class="result-value">${url}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Phishing Detected:</span>
                        <span class="result-value"><span class="badge ${isPhishing ? 'badge-danger' : 'badge-safe'}">${isPhishing ? 'Yes' : 'No'}</span></span>
                    </div>
                    ${isPhishing ? `
                    <div class="result-row">
                        <span class="result-label">Confidence Level:</span>
                        <span class="result-value">${confidence}%</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Reason:</span>
                        <span class="result-value">${getRandomPhishingReason()}</span>
                    </div>
                    ` : `
                    <div class="result-row">
                        <span class="result-label">Analysis:</span>
                        <span class="result-value">No phishing indicators detected</span>
                    </div>
                    `}
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    function validateSSL(url) {
        const resultElement = document.getElementById('sslResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Validating SSL certificate...</span></div>';
        
        setTimeout(() => {
            const isValid = Math.random() > 0.2; // 80% chance of valid SSL
            const expiresIn = Math.floor(Math.random() * 180) + 1;
            const issuer = getRandomSSLIssuer();
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">URL:</span>
                        <span class="result-value">${url}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">SSL Valid:</span>
                        <span class="result-value"><span class="badge ${isValid ? 'badge-safe' : 'badge-danger'}">${isValid ? 'Yes' : 'No'}</span></span>
                    </div>
                    ${isValid ? `
                    <div class="result-row">
                        <span class="result-label">Issued By:</span>
                        <span class="result-value">${issuer}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Expires In:</span>
                        <span class="result-value">${expiresIn} day${expiresIn !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Protocol:</span>
                        <span class="result-value">TLS 1.3</span>
                    </div>
                    ` : `
                    <div class="result-row">
                        <span class="result-label">Issue:</span>
                        <span class="result-value">${getRandomSSLIssue()}</span>
                    </div>
                    `}
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    function checkReputation(domain) {
        const resultElement = document.getElementById('reputationResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Checking domain reputation...</span></div>';
        
        setTimeout(() => {
            const reputationScore = Math.floor(Math.random() * 100);
            let reputationStatus, badgeClass;
            
            if (reputationScore >= 75) {
                reputationStatus = 'Excellent';
                badgeClass = 'badge-safe';
            } else if (reputationScore >= 50) {
                reputationStatus = 'Good';
                badgeClass = 'badge-info';
            } else if (reputationScore >= 25) {
                reputationStatus = 'Fair';
                badgeClass = 'badge-warning';
            } else {
                reputationStatus = 'Poor';
                badgeClass = 'badge-danger';
            }
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">Domain:</span>
                        <span class="result-value">${domain}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Reputation Score:</span>
                        <span class="result-value">${reputationScore}/100</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Status:</span>
                        <span class="result-value"><span class="badge ${badgeClass}">${reputationStatus}</span></span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Analysis:</span>
                        <span class="result-value">${getRandomAnalysis()}</span>
                    </div>
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    function scanForMalware(url) {
        const resultElement = document.getElementById('malwareResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Scanning for malware...</span></div>';
        
        setTimeout(() => {
            const hasMalware = Math.random() > 0.8; // 20% chance of malware
            const threatsDetected = hasMalware ? Math.floor(Math.random() * 5) + 1 : 0;
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">URL Scanned:</span>
                        <span class="result-value">${url}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Malware Detected:</span>
                        <span class="result-value"><span class="badge ${hasMalware ? 'badge-danger' : 'badge-safe'}">${hasMalware ? 'Yes' : 'No'}</span></span>
                    </div>
                    ${hasMalware ? `
                    <div class="result-row">
                        <span class="result-label">Threats Found:</span>
                        <span class="result-value">${threatsDetected}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Threat Types:</span>
                        <span class="result-value">${getRandomMalwareTypes(threatsDetected)}</span>
                    </div>
                    ` : `
                    <div class="result-row">
                        <span class="result-label">Last Scan:</span>
                        <span class="result-value">${new Date().toLocaleDateString()}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Status:</span>
                        <span class="result-value">Clean</span>
                    </div>
                    `}
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    function checkDomainAge(domain) {
        const resultElement = document.getElementById('domainAgeResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Checking domain age...</span></div>';
        
        setTimeout(() => {
            const years = Math.floor(Math.random() * 20) + 1;
            const days = Math.floor(Math.random() * 365);
            const createdDate = new Date();
            createdDate.setFullYear(createdDate.getFullYear() - years);
            createdDate.setDate(createdDate.getDate() - days);
            
            const formattedDate = createdDate.toLocaleDateString();
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">Domain:</span>
                        <span class="result-value">${domain}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Registered On:</span>
                        <span class="result-value">${formattedDate}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Age:</span>
                        <span class="result-value">${years} year${years !== 1 ? 's' : ''}, ${days} day${days !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Status:</span>
                        <span class="result-value"><span class="badge ${years > 5 ? 'badge-safe' : years > 2 ? 'badge-info' : 'badge-warning'}">${years > 5 ? 'Established' : years > 2 ? 'Mature' : 'New'}</span></span>
                    </div>
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    function whoisLookup(domain) {
        const resultElement = document.getElementById('whoisResult');
        resultElement.innerHTML = '<div class="loading"><div class="spinner"></div><span>Performing WHOIS lookup...</span></div>';
        
        setTimeout(() => {
            const registrars = ['GoDaddy', 'Namecheap', 'Google Domains', 'Network Solutions', 'Name.com'];
            const registrar = registrars[Math.floor(Math.random() * registrars.length)];
            
            const createdDate = new Date();
            createdDate.setFullYear(createdDate.getFullYear() - (Math.floor(Math.random() * 10) + 1));
            
            const expiresDate = new Date();
            expiresDate.setFullYear(expiresDate.getFullYear() + (Math.floor(Math.random() * 5) + 1));
            
            const nameServers = [
                `ns1.${domain.split('.')[0]}.com`,
                `ns2.${domain.split('.')[0]}.com`,
                `ns3.${domain.split('.')[0]}.com`
            ];
            
            const html = `
                <div class="result-item">
                    <div class="result-row">
                        <span class="result-label">Domain:</span>
                        <span class="result-value">${domain}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Registrar:</span>
                        <span class="result-value">${registrar}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Registered On:</span>
                        <span class="result-value">${createdDate.toLocaleDateString()}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Expires On:</span>
                        <span class="result-value">${expiresDate.toLocaleDateString()}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Name Servers:</span>
                        <span class="result-value">${nameServers.join(', ')}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Status:</span>
                        <span class="result-value"><span class="badge badge-info">Active</span></span>
                    </div>
                </div>
            `;
            
            resultElement.innerHTML = html;
        }, 1500);
    }
    
    // Helper functions for generating random data
    function getRandomAnalysis() {
        const analyses = [
            "No significant security issues detected.",
            "Domain has a good standing with minor issues.",
            "Some security concerns noted in the past 6 months.",
            "Recent improvement in security posture detected.",
            "Multiple security incidents reported last year."
        ];
        return analyses[Math.floor(Math.random() * analyses.length)];
    }
    
    function getRandomPhishingReason() {
        const reasons = [
            "Suspicious domain name mimicking a popular brand",
            "Recently registered domain with high traffic",
            "Known phishing patterns detected in page content",
            "Reported by multiple security services",
            "Suspicious JavaScript behavior detected"
        ];
        return reasons[Math.floor(Math.random() * reasons.length)];
    }
    
    function getRandomSSLIssuer() {
        const issuers = [
            "Let's Encrypt",
            "DigiCert",
            "Comodo",
            "Sectigo",
            "GlobalSign",
            "GoDaddy"
        ];
        return issuers[Math.floor(Math.random() * issuers.length)];
    }
    
    function getRandomSSLIssue() {
        const issues = [
            "Certificate has expired",
            "Domain name mismatch",
            "Self-signed certificate",
            "Weak encryption algorithm",
            "Certificate revoked"
        ];
        return issues[Math.floor(Math.random() * issues.length)];
    }
    
    function getRandomMalwareTypes(count) {
        const types = [
            "Trojan",
            "Spyware",
            "Ransomware",
            "Adware",
            "Keylogger",
            "Botnet",
            "Rootkit",
            "Worm"
        ];
        
        // Shuffle array and pick first 'count' elements
        const shuffled = [...types].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count).join(', ');
    }
});