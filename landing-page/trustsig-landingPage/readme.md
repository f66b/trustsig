                                      ✅  TrustSig
TrustSig is a decentralized legal contract management and arbitration platform powered by blockchain, smart contracts, and decentralized storage. It allows users to create, enforce, and resolve digital agreements with full transparency, privacy, and automation.

📌 Project Goal
To build a trustless, transparent, and enforceable legal ecosystem where:

Users can upload and tokenize legal documents

Agreements are enforceable via programmable smart contracts

Disputes are resolved on-chain by a decentralized arbitration DAO

All interactions are verifiable, automated, and tamper-proof

🧩 Key Features
Feature	Description
📝 Contract Builder	Upload and tokenize legal contracts (PDF/DOCX)
🔐 Encrypted Storage	All contracts are encrypted and stored via IPFS/Arweave
🧠 Smart Contract Execution	Milestones, payments, and disputes encoded into NEAR smart contracts
⚖️ On-chain Arbitration (VaultCourt)	Disputes resolved by staked jurors in a decentralized court
💰 Staking & Governance	Participants stake $LAW tokens to participate in governance and arbitration
📡 Oracle Integration	On-chain contracts use oracle services for verifying off-chain events
📊 Monitoring & Logging	Prometheus and Grafana for observability and performance tracking

🏗️ Architecture Overview
LawVault is a modular, microservice-based DApp consisting of:

🔒 NEAR Smart Contracts (contracts/)
legal-contract: Manages legal agreement logic, milestones, and disputes

vault-court: DAO that handles juror voting and dispute resolutions

law-token: ERC20-compatible governance token ($LAW)

oracle-manager: Handles external verification via oracles

🧠 AI Parser (ai-parser/)
[Separated]: Parses legal documents into structured data (JSON schema)

🖥️ Frontend (frontend/)
Built with React + Vite + TailwindCSS

Contract builder, dispute dashboard, juror voting interface

⚙️ Backend (backend/)
Written in Rust with Actix-web

Handles contract metadata, IPFS uploads, dispute state, and NEAR integration

🗃️ IPFS Service (ipfs/)
Stores encrypted legal documents off-chain

🔗 Oracle Service (oracle/)
Pushes off-chain data (e.g., payment confirmations) to the chain

📊 Monitoring (monitoring/)
Prometheus + Grafana for real-time metrics and alerts

🌐 Reverse Proxy (nginx/)
SSL termination and routing between services

🧪 Contract Workflow
Upload a contract (PDF/DOCX)

Parse and generate a JSON schema (via ai-parser)

Deploy a legal-contract smart contract on NEAR

Track progress and payments via smart contract milestones

Dispute if any party breaches the agreement

VaultCourt DAO arbitrates dispute and enforces outcome

Oracles validate off-chain proofs (timestamps, transactions)

🪙 Tokenomics
$Law Token
Used for:

Juror staking

Voting in arbitration

Access to premium contract logic modules

Jurors are rewarded in $LAW for fair votes

Penalties/slashing for dishonest juror behavior

⚙️ Technologies Used
Layer	Stack
Smart Contracts	Rust (NEAR SDK)
Frontend	React, Vite, Tailwind
Backend API	Rust (Actix-Web), SQLx
Database	PostgreSQL
Storage	IPFS + Arweave
Oracles	Rust + JSON-RPC
Monitoring	Prometheus, Grafana
Containerization	Docker, Docker Compose
Reverse Proxy	Nginx


🚀 Getting Started
🧰 Prerequisites
Docker + Docker Compose

Node.js (for local frontend testing)

Rust (for local smart contract builds)

🔧 Setup
bash
Copy
Edit
cp .env.example .env
make build       # Build all services
make up          # Start the entire stack

🧪 Running Tests
bash
Copy
Edit
make test        # Run all contract and integration tests

👥 Contributing
We welcome all contributors!

Fork the repo

Create a feature branch

Submit a pull request

For detailed contribution rules, see CONTRIBUTING.md

📄 License
This project is licensed under the MIT License.
See LICENSE for details.

🔗 Related Resources
NEAR SDK Docs: https://docs.near.org

IPFS Docs: https://docs.ipfs.tech/

Actix Web Docs: https://actix.rs/

Vite Docs: https://vitejs.dev/

