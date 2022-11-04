import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { poolRoutes } from "./routes/pool";
import { authRoutes } from "./routes/auth";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
	const fastify = Fastify({
		logger: true,
	});

	await fastify.register(cors, {
		origin: true,
	});

	await fastify.register(jwt, {
		secret: "nlwcopa",
	});

	await fastify.register(poolRoutes);
	await fastify.register(authRoutes);
	await fastify.register(gameRoutes);
	await fastify.register(guessRoutes);
	await fastify.register(userRoutes);

	await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
