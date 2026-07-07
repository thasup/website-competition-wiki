Metric — a large tabular-figure number with label and optional delta. Use in stat bands, dashboards, and pricing.

```jsx
<Metric label="Total volume" value="$3,481,902" delta="12.4%" />
<Metric label="Uptime" value="99.99" unit="%" />
<Metric label="Latency" value="42" unit="ms" deltaDirection="down" delta="8%" onDark />
```

Always tabular. Props: `label`, `value`, `unit`, `delta` + `deltaDirection` (up=Swamp, down=Terra Cotta), `align`, `onDark`.
