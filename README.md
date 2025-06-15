# PI_APPS
# 🧠 Raspberry Pi 5 Software Suite

A curated collection of custom software tools developed specifically for the **Raspberry Pi 5**, designed for automation, control, and edge computing use cases.

---

## 🔍 Project Overview

This repository contains a modular set of applications built to leverage the performance capabilities of the **Raspberry Pi 5**. Whether you're deploying IoT sensors, managing GPIOs, or building a headless controller for estate automation—this suite has you covered.

---

## 🧰 Features

- ✅ Python and Node.js based tools
- ✅ GPIO control & monitoring utilities
- ✅ Cron-enabled background services
- ✅ Web interface for real-time command and control
- ✅ Data logging and analytics (CSV, JSON, and SQLite support)
- ✅ Auto-start on reboot (via `systemd` or `cron`)

---

## 📦 Components

| Folder | Description |
|--------|-------------|
| `master/` | Master controller application (Flask or Node.js) |
| `slave/` | Client scripts that push sensor data to master |
| `ui/`     | Web-based control panel interface |
| `scripts/` | Utility scripts (e.g., start/stop services, diagnostics) |

---

## 💻 Prerequisites

- Raspberry Pi 5 (any model with active network)
- Raspbian OS (latest)
- Python 3.10+
- Node.js 18.x+
- `pip`, `npm`, and `git`

---

## 🚀 Getting Started

### Clone this repo:
```bash
git clone https://github.com/your-username/pi5-software-suite.git
cd pi5-software-suite
