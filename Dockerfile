FROM oven/bun

WORKDIR /app
COPY . .

RUN bun ci
RUN bun run build

ARG PORT
EXPOSE ${PORT:-4321}

CMD bun --bun run preview