# AI-Website-Toolkit
Cybersecurity toolkit for evaluating website trustworthiness (Phishing Detector, SSL Validator, WHOIS Lookup, etc.
# Cybersecurity Tools: Website Trust Evaluation Platform

### 🔐 Tools Implemented:
- Reputation Checker
- Phishing Detector
- Domain Age Checker
- SSL Validator
- Malware Scanner
- WHOIS Lookup

### 💡 Tech Stack:
HTML, CSS, JavaScript, APIs (WHOIS, VirusTotal, Safe Browsing)

### 📌 Author:
- Saurabh Adivrekar | TYBSc.IT 
- Ananya Shetty | TYBSc.IT 

### ⚠️ Disclaimer:
This tool is for educational purposes only and does not collect or store user data.

Problem Statement
Cybercriminals deploy 3.4 million phishing sites monthly (APWG 2025), yet existing tools suffer from:

Fragmented analysis (SSL/WHOIS/reputation checks in silos)

Slow detection (>5 sec latency for multi-tool workflows)

High false negatives (42% of phishing sites evade single-point scanners)

Our Solution:
An integrated Python toolkit combining:
✔ Reputation Scoring (VirusTotal + ThreatFox)
✔ Phishing Detection (Hybrid ML: Random Forest + LSTM)
✔ SSL/TLS Audit (OCSP stapling, certificate transparency)
✔ Domain Age Profiling (WHOIS + historic DNS records)

Setup Instructions
1. Prerequisites
Python 3.9+

API Keys (Free Tier):

VirusTotal

Google Safe Browsing

WHOIS RDAP

2. Installation

# Clone repository
git clone https://github.com/yourusername/WebTrustScan.git
cd WebTrustScan

# Install dependencies
pip install -r requirements.txt

# Configure API keys
echo "VT_API=your_virustotal_key" > .env
echo "GSB_API=your_google_safe_browsing_key" >> .env

3. Usage

from toolkit import WebTrustScan

scanner = WebTrustScan(target_url="https://example.com")
results = scanner.full_scan()  # Returns JSON report
  System Architecture:
 ![System Architecture](https://github.com/user-attachments/assets/019f62af-af81-498e-82a7-cd517821d0ff)

Demo Screenshot:
![Screenshot 2025-05-11 at 11 51 44 PM](https://github.com/user-attachments/assets/81fbe3c1-c501-430b-a70a-eec52634b1fb)
![Screenshot 2025-05-11 at 11 56 23 PM](https://github.com/user-attachments/assets/ba476f30-5d47-4025-994e-a20001d81c9f)
![Screenshot 2025-05-11 at 11 55 12 PM](https://github.com/user-attachments/assets/a26321cb-33ab-456a-9d63-aa9001f978fc)
![Screenshot 2025-05-11 at 11 55 02 PM](https://github.com/user-attachments/assets/ee26b255-d8af-4b88-abd9-bdeaa1c7405f)
![Screenshot 2025-05-11 at 11 52 29 PM](https://github.com/user-attachments/assets/bd301ee7-d3d0-4726-afd5-2deabd69cc87)
![Screenshot 2025-05-11 at 11 52 19 PM](https://github.com/user-attachments/assets/7bd1d71c-2697-4e7c-9b4b-3428f9f2cd06)
