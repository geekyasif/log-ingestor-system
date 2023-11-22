const dummyData = [
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "warning",
    message: "Resource usage high",
    resourceId: "server-5678",
    timestamp: "2023-09-15T09:30:00Z",
    traceId: "def-456-789",
    spanId: "span-789",
    commit: "a1b2c3d",
    metadata: {
      parentResourceId: "server-3456",
    },
  },
  {
    level: "info",
    message: "Request processed successfully",
    resourceId: "server-9876",
    timestamp: "2023-09-15T11:45:00Z",
    traceId: "ghi-789-123",
    spanId: "span-012",
    commit: "e4f5g6h",
    metadata: {
      parentResourceId: "server-6543",
    },
  },
  {
    level: "error",
    message: "Disk space low",
    resourceId: "server-2468",
    timestamp: "2023-09-15T13:15:00Z",
    traceId: "jkl-012-345",
    spanId: "span-234",
    commit: "i9j8k7l",
    metadata: {
      parentResourceId: "server-1357",
    },
  },
  {
    level: "info",
    message: "User login",
    resourceId: "server-8642",
    timestamp: "2023-09-15T14:45:00Z",
    traceId: "mno-456-789",
    spanId: "span-456",
    commit: "m1n2o3p",
    metadata: {
      parentResourceId: "server-7531",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "info",
    message: "Request processed successfully",
    resourceId: "server-5678",
    timestamp: "2023-11-19T12:30:00Z",
    traceId: "def-123-456",
    spanId: "span-789",
    commit: "a1b2c3d",
    metadata: {
      parentResourceId: "server-3456",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "warning",
    message: "Resource usage high",
    resourceId: "server-5678",
    timestamp: "2023-09-15T09:30:00Z",
    traceId: "def-456-789",
    spanId: "span-789",
    commit: "a1b2c3d",
    metadata: {
      parentResourceId: "server-3456",
    },
  },
  {
    level: "info",
    message: "Request processed successfully",
    resourceId: "server-9876",
    timestamp: "2023-09-15T11:45:00Z",
    traceId: "ghi-789-123",
    spanId: "span-012",
    commit: "e4f5g6h",
    metadata: {
      parentResourceId: "server-6543",
    },
  },
  {
    level: "error",
    message: "Failed to connect to DB",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: {
      parentResourceId: "server-0987",
    },
  },
  {
    level: "warning",
    message: "Resource usage high",
    resourceId: "server-5678",
    timestamp: "2023-09-15T09:30:00Z",
    traceId: "def-456-789",
    spanId: "span-789",
    commit: "a1b2c3d",
    metadata: {
      parentResourceId: "server-3456",
    },
  },
  {
    level: "info",
    message: "Request processed successfully",
    resourceId: "server-9876",
    timestamp: "2023-09-15T11:45:00Z",
    traceId: "ghi-789-123",
    spanId: "span-012",
    commit: "e4f5g6h",
    metadata: {
      parentResourceId: "server-6543",
    },
  },
  {
    level: "error",
    message: "Disk space low",
    resourceId: "server-2468",
    timestamp: "2023-09-15T13:15:00Z",
    traceId: "jkl-012-345",
    spanId: "span-234",
    commit: "i9j8k7l",
    metadata: {
      parentResourceId: "server-1357",
    },
  },
  {
    level: "info",
    message: "User login",
    resourceId: "server-8642",
    timestamp: "2023-09-15T14:45:00Z",
    traceId: "mno-456-789",
    spanId: "span-456",
    commit: "m1n2o3p",
    metadata: {
      parentResourceId: "server-7531",
    },
  },
  {
    level: "warning",
    message: "Network latency detected",
    resourceId: "server-1357",
    timestamp: "2023-09-15T16:00:00Z",
    traceId: "pqr-789-012",
    spanId: "span-789",
    commit: "q1r2s3t",
    metadata: {
      parentResourceId: "server-2468",
    },
  },
  {
    level: "error",
    message: "Database query timeout",
    resourceId: "server-7531",
    timestamp: "2023-09-15T17:30:00Z",
    traceId: "uvw-012-345",
    spanId: "span-012",
    commit: "u9v8w7x",
    metadata: {
      parentResourceId: "server-8642",
    },
  },
  {
    level: "info",
    message: "File upload complete",
    resourceId: "server-9204",
    timestamp: "2023-09-15T19:00:00Z",
    traceId: "xyz-345-678",
    spanId: "span-234",
    commit: "y1z2a3b",
    metadata: {
      parentResourceId: "server-0314",
    },
  },
  {
    level: "warning",
    message: "CPU usage spike",
    resourceId: "server-0314",
    timestamp: "2023-09-15T20:30:00Z",
    traceId: "abc-678-901",
    spanId: "span-567",
    commit: "c4d5e6f",
    metadata: {
      parentResourceId: "server-9204",
    },
  },
  {
    level: "error",
    message: "Authentication failure",
    resourceId: "server-4567",
    timestamp: "2023-09-15T22:00:00Z",
    traceId: "def-901-234",
    spanId: "span-890",
    commit: "g7h8i9j",
    metadata: {
      parentResourceId: "server-5678",
    },
  },
];

module.exports = dummyData;