# Ghost Dynamic Mail Configuration Module (v6)

A custom, seamless two-way configuration injection layer built for **Ghost CMS (v6.24.0)**. This extension injects a dynamic, native-styled email provider configuration card directly into the default onboarding setup screen (`/ghost/#/setup`).

It allows administrators to provision their system transaction routing pipelines simultaneously while initializing their master admin profile account.

## ✨ Features

- **Dynamic UI Form Injection:** Integrates a responsive dropdown selection component right inside Ghost's native onboarding viewport matching core design elements seamlessly.
- **Multi-Provider Support:** Conditional form switching logic mapping explicit inputs for:
  - **SMTP:** Core host address, explicit routing port keys, user ID handles, and app passwords.
  - **Mailgun:** Dedicated API validation credentials, tracking domains, and geographic regions.
  - **AWS SES:** Specialized IAM cryptographic identity parameters (`AWSAccessKeyID`, `AWSSecretKey`, `region`).
- **Two-Way File Mirror Synchronization:** Uses a non-blocking background transport hook to capture frontend forms and write data cleanly to `config.development.json` on disk.
- **Automatic Smart Formatting:** Preserves standard human-readable inputs while handling complex array mutations safely in the background.
- **Cross-Platform Portability:** Completely eliminates hardcoded absolute system path anchors by computing host locations dynamically via Ghost's native `paths:contentPath` engine.

---

## ⚙️ Architecture & Modified Files

This feature intercepts Ghost's internal Express.js pipeline and visual delivery matrix using the following two core files:

### 1. Backend Route Management Interceptor
**File Path:** `core/server/web/admin/app.js`  
**Purpose:** Mounts dynamic sub-routing listeners (`/v6-setup-smtp-direct-write`) right under the initialized `adminApp` instance to process raw input payload chunks and parse them securely straight into the root configuration file structure before framework processes finalize.

### 2. Frontend Interface Injection Engine
**File Path:** `core/server/web/admin/controller.js`  
**Purpose:** Uses a browser-side `MutationObserver` to monitor DOM states on the hash `#` layout step. Injects layout cards, binds styling properties, toggles contextual parameter cards, and hooks onto the main submit action to stream form values upstream in a split-second before standard database accounts finish writing.

---

## 🚀 Local Installation & Running

1. Clone this repository into your test environment directory.
2. Ensure dependencies are linked and clear application caching structures.
3. Spin up the development server stack via terminal:
   ```bash
   ghost restart
