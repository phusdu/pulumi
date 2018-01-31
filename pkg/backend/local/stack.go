// Copyright 2016-2017, Pulumi Corporation.  All rights reserved.

package local

import (
	"encoding/json"

	"github.com/pulumi/pulumi/pkg/backend"
	"github.com/pulumi/pulumi/pkg/engine"
	"github.com/pulumi/pulumi/pkg/operations"
	"github.com/pulumi/pulumi/pkg/pack"
	"github.com/pulumi/pulumi/pkg/resource/config"
	"github.com/pulumi/pulumi/pkg/resource/deploy"
	"github.com/pulumi/pulumi/pkg/tokens"
)

// Stack is a local stack.  This simply adds some local-specific properties atop the standard backend stack interface.
type Stack interface {
	backend.Stack
	Path() string // a path to the stack's checkpoint file on disk.
}

// localStack is a local stack descriptor.
type localStack struct {
	name     tokens.QName     // the stack's name.
	path     string           // a path to the stack's checkpoint file on disk.
	config   config.Map       // the stack's config bag.
	snapshot *deploy.Snapshot // a snapshot representing the latest deployment state.
	b        *localBackend    // a pointer to the backend this stack belongs to.
}

func newStack(name tokens.QName, path string, config config.Map,
	snapshot *deploy.Snapshot, b *localBackend) Stack {
	return &localStack{
		name:     name,
		path:     path,
		config:   config,
		snapshot: snapshot,
		b:        b,
	}
}

func (s *localStack) Name() tokens.QName         { return s.name }
func (s *localStack) Config() config.Map         { return s.config }
func (s *localStack) Snapshot() *deploy.Snapshot { return s.snapshot }
func (s *localStack) Backend() backend.Backend   { return s.b }
func (s *localStack) Path() string               { return s.path }

func (s *localStack) Remove(force bool) (bool, error) {
	return backend.RemoveStack(s, force)
}

func (s *localStack) Preview(pkg *pack.Package, root string, debug bool, opts engine.UpdateOptions) error {
	return backend.PreviewStack(s, pkg, root, debug, opts)
}

func (s *localStack) Update(pkg *pack.Package, root string,
	debug bool, m backend.UpdateMetadata, opts engine.UpdateOptions) error {
	return backend.UpdateStack(s, pkg, root, debug, m, opts)
}

func (s *localStack) Destroy(pkg *pack.Package, root string,
	debug bool, m backend.UpdateMetadata, opts engine.UpdateOptions) error {
	return backend.DestroyStack(s, pkg, root, debug, m, opts)
}

func (s *localStack) GetLogs(query operations.LogQuery) ([]operations.LogEntry, error) {
	return backend.GetStackLogs(s, query)
}

func (s *localStack) ExportDeployment() (json.RawMessage, error) {
	return backend.ExportStackDeployment(s)
}

func (s *localStack) ImportDeployment(deployment json.RawMessage) error {
	return backend.ImportStackDeployment(s, deployment)
}