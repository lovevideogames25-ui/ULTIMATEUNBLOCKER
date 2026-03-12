# 🚀 ULTIMATELINKS - Deployment Configurations

This folder contains all deployment configuration files for the ULTIMATELINKS project.

## 📁 **Configuration Files**

### **🛠️ Platform-Specific Configurations**

| Platform | File | Description | Use Case |
|----------|-------|-------------|----------|
| **Vercel** | `vercel.json` | Static site deployment with security headers |
| **Netlify** | `netlify.toml` | Build configuration and redirects |
| **Render** | `render.yaml` | Static site with environment variables |
| **Railway** | `railway.json` | Container deployment with health checks |
| **AWS Amplify** | `amplify.json` | AWS static site with CI/CD |
| **Google Cloud Run** | `gcp-run.json` | Container deployment on Cloud Run |
| **Microsoft Azure** | `azure.json` | Azure Resource Manager deployment |
| **Oracle Cloud** | `oracle.json` | OCI static site and functions |
| **Heroku** | `heroku.json` | PaaS deployment with dynos |
| **Glitch** | `glitch.json` | Remix and development platform |
| **Replit** | `replit.json` | Online IDE and deployment |
| **IBM Cloud** | `ibm-cloud.json` | IBM Cloud Developer Tools |
| **Node.js** | `package.json` | Project metadata and scripts |

## 🎯 **Quick Start**

### **🚀 One-Click Deployment**
Choose any platform below and use the corresponding configuration file:

1. **Vercel**: Upload files and Vercel will auto-detect `vercel.json`
2. **Netlify**: Connect repository and Netlify will use `netlify.toml`
3. **Render**: Link repository and Render will use `render.yaml`
4. **Railway**: Import project and Railway will use `railway.json`
5. **AWS Amplify**: Connect to AWS and Amplify will use `amplify.json`
6. **Google Cloud Run**: Deploy to Cloud Run using `gcp-run.json`
7. **Microsoft Azure**: Deploy to Azure using `azure.json` template
8. **Oracle Cloud**: Deploy to OCI using `oracle.json` template
9. **Heroku**: Connect to Heroku and use `heroku.json`
10. **Glitch**: Import to Glitch and use `glitch.json`
11. **Replit**: Import to Replit and use `replit.json`
12. **IBM Cloud**: Deploy to IBM Cloud using `ibm-cloud.json`

### **📋 Manual Setup**
Each configuration file includes:
- **🔒 Security headers** for protection
- **🔄 URL routing** for SPA compatibility
- **🌍 Environment variables** for different stages
- **🏥 Health checks** where applicable
- **🛣️ Redirects** for common routes

## 🛠️ **Configuration Details**

### **🔒 Security Features**
All configurations include:
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **X-Content-Type-Options**: nosniff
- **Content-Security-Policy**: Strict CSP rules
- **Referrer-Policy**: Strict origin policy

### **🔄 Common Redirects**
Standard redirects across all platforms:
- `/home` → `/` (permanent)
- `/categories` → `/#categories` (permanent)
- `/settings` → `/#settings` (permanent)
- `/*` → `/index.html` (SPA routing)

### **🌍 Environment Variables**
Consistent environment setup:
- **NODE_ENV**: production/development
- **NODE_VERSION**: 18
- **PORT**: 3000 (where applicable)

## 📞 **Support**

For deployment issues:
1. Check platform-specific documentation
2. Verify configuration syntax
3. Ensure GitLab repository is accessible
4. Review build logs for errors

## 🎊 **Ready to Deploy!**

All configuration files are optimized for:
- **⚡ Fast deployment**
- **🔒 Maximum security**
- **📱 Mobile compatibility**
- **🔄 SPA routing**
- **🌍 Environment management**

---

*Last updated: March 2026*
