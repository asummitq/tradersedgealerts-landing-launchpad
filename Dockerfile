
# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM python:3.11-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY requirements.txt server.py ./
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "server.py"]
