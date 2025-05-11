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
![Screenshot 2025-05-11 at 11 52 19 PM](https://github.com/user-attachments/assets/f927ba2a-0ead-4580-b951-cff525b1066e)
![Screenshot 2025-05-11 at 11 52 29 PM](https://github.com/user-attachments/assets/51de4aec-71bd-4e63-b425-682c48fbd890)
![Screenshot 2025-05-11 at 11 55 02 PM](https://github.com/user-attachments/assets/3bdbddf2-5a72-4120-bf88-211d08239470)
![Screenshot 2025-05-11 at 11 55 12 PM](https://github.com/user-attachments/assets/f721c8cf-d08c-4294-a610-f0702e6a9579)
![Screenshot 2025-05-11 at 11 56 23 PM](https://github.com/user-attachments/assets/5d86054f-bf85-475c-bc10-0043c97fed4f)
