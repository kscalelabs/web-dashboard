start:
	@if [ -f env.sh ]; then source env.sh; fi; pnpm run dev
.PHONY: start

format:
	@pnpm run format
.PHONY: format

lint:
	@pnpm run lint
.PHONY: lint

test:
	@pnpm run test -- --watchAll=false
.PHONY: test

install:
	@pnpm install
.PHONY: install

build:
	@pnpm run build
.PHONY: build
