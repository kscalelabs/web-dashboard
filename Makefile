start:
	@if [ -f env.sh ]; then source env.sh; fi; cd frontend && npm run dev

format:
	@cd frontend && npm run format
.PHONY: format

lint:
	@cd frontend && npm run lint
.PHONY: lint

test-frontend:
	@cd frontend && npm run test -- --watchAll=false
