# ---- Base Stage (Install dependencies and build app) ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# Copy the rest of the code
COPY . .

# Build Next.js app
RUN pnpm build

# ---- Production Stage ----
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Install only production dependencies
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["node_modules/.bin/next", "start"]
