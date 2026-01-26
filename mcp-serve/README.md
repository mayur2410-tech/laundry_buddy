# Laundry Buddy MCP Server

Model Context Protocol (MCP) server for Laundry Buddy application. This server provides tools for user authentication and order submission.

## Tools Available

### 1. Login Tool
- **Name**: `login`
- **Description**: Login as a user to the Laundry Buddy system
- **Parameters**:
  - `email` (string, required): User's email address
  - `password` (string, required): User's password
- **Returns**: JWT token, user ID, name, and role

### 2. Submit Order Tool
- **Name**: `submit_order`
- **Description**: Submit a laundry order (requires authentication)
- **Parameters**:
  - `token` (string, required): JWT authentication token from login
  - `numberOfClothes` (number, required): Number of clothes (minimum 1)
  - `weight` (number, required): Weight of laundry (minimum 0)
- **Returns**: Order confirmation with order details

## Setup

1. Install dependencies:
```bash
cd mcp-serve
npm install
```

2. Make sure your backend server is running on `https://laundry-buddy-yysq.onrender.com`

3. Run the MCP server:
```bash
npm start
```

## Configuration

The server is configured to connect to:
- Base URL: `https://laundry-buddy-yysq.onrender.com`
- Login endpoint: `/user/login`
- Submit order endpoint: `/user/submit-order`

## Usage with Claude Desktop

To use this MCP server with Claude Desktop, add the following to your Claude Desktop configuration file:

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "laundry-buddy": {
      "command": "node",
      "args": ["D:/laundry-buddy/laundry_buddy/mcp-serve/index.js"]
    }
  }
}
```

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "laundry-buddy": {
      "command": "node",
      "args": ["/path/to/laundry-buddy/laundry_buddy/mcp-serve/index.js"]
    }
  }
}
```

**Linux**: `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "laundry-buddy": {
      "command": "node",
      "args": ["/path/to/laundry-buddy/laundry_buddy/mcp-serve/index.js"]
    }
  }
}
```

After adding the configuration, restart Claude Desktop to load the MCP server.

## Example Usage

Once connected, you can chat with Claude and use commands like:

- "Login with email user@example.com and password mypassword"
- "Submit an order with 5 clothes and weight 2.5"
- "I want to submit a laundry order for 10 items weighing 3.5 kg"

Claude will automatically use the appropriate tools based on your requests.

