#!/usr/bin/env python3
"""
Simple Static Server for ULTIMATELINKS AI
Bypasses CORS issues by serving files properly
"""

import http.server
import socketserver
import os
import sys
from urllib.parse import urlparse

class CORSFreeHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add proper headers to prevent CORS issues
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cross-Origin-Embedder-Policy', 'unsafe-none')
        self.send_header('Cross-Origin-Opener-Policy', 'unsafe-none')
        self.send_header('Cross-Origin-Resource-Policy', 'cross-origin')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
    
    def do_GET(self):
        # Handle .env file requests
        if self.path == '/.env':
            self.path = '/.env'
        # Handle root requests
        elif self.path == '/':
            self.path = '/index.html'
        super().do_GET()
    
    def log_message(self, format, *args):
        # Custom logging to show what's happening
        if not self.path.endswith(('.css', '.js', '.ico', '.png', '.jpg')):
            print(f"🌐 {self.address_string()} - {format%args}")

def find_free_port(start_port=8000):
    """Find a free port starting from start_port"""
    for port in range(start_port, start_port + 100):
        try:
            with socketserver.TCPServer(("", port), None) as s:
                return port
        except OSError:
            continue
    return start_port

def main():
    # Find a free port
    port = find_free_port(8000)
    
    print("🚀 ULTIMATELINKS Static Server Starting...")
    print(f"📍 Local: http://localhost:{port}")
    print(f"🔗 Network: http://{get_local_ip()}:{port}")
    print(f"📁 Serving: {os.getcwd()}")
    print("✅ CORS-free server ready!")
    print("🎯 Open your browser and start chatting!")
    print("-" * 50)
    
    # Create server
    with socketserver.TCPServer(("", port), CORSFreeHandler) as httpd:
        print(f"🌐 Server running at http://localhost:{port}")
        print("🔄 Press Ctrl+C to stop server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
            sys.exit(0)

def get_local_ip():
    """Get local IP address"""
    try:
        import socket
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

if __name__ == "__main__":
    main()
