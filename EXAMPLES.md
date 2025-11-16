# Pipeline Examples

This document provides examples of pipelines you can build with the Pipeline Builder.

## Example 1: Simple Text Processing

**Description:** Basic pipeline that takes an input and produces an output.

**Structure:**
```
Input (user_text) → Output (result)
```

**Steps to Create:**
1. Drag an Input node onto the canvas
2. Configure Input:
   - Name: "user_text"
   - Type: Text
3. Drag an Output node onto the canvas
4. Configure Output:
   - Name: "result"
   - Type: Text
5. Connect Input's output handle to Output's input handle

**Expected Analysis:**
- Nodes: 2
- Edges: 1
- Is DAG: true

---

## Example 2: LLM Chat Pipeline

**Description:** A pipeline that processes user input through an LLM.

**Structure:**
```
Input (user_query) → Text (prompt) → LLM → Output (response)
                                      ↑
                    Text (system_prompt)
```

**Steps to Create:**
1. Create Input node:
   - Name: "user_query"
   - Type: Text
2. Create Text node for system prompt:
   - Text: "You are a helpful assistant"
3. Create Text node for user prompt:
   - Text: "{{user_query}}"
4. Create LLM node
5. Create Output node:
   - Name: "response"
   - Type: Text
6. Connect:
   - System prompt Text → LLM System handle
   - User prompt Text → LLM Prompt handle
   - LLM Response → Output

**Expected Analysis:**
- Nodes: 5
- Edges: 4
- Is DAG: true

---

## Example 3: Multi-Input Processing

**Description:** Pipeline with multiple inputs that merge at a single point.

**Structure:**
```
Input (source1) ↘
                 Text (combiner) → Output (result)
Input (source2) ↗
```

**Steps to Create:**
1. Create two Input nodes:
   - First: "source1"
   - Second: "source2"
2. Create a Text node:
   - Text: "{{source1}} and {{source2}}"
3. Create an Output node:
   - Name: "result"
4. Note: In this simple implementation, you can only connect one input at a time to the Text node
   - This demonstrates the concept but would need enhancement for true multi-input

**Expected Analysis:**
- Nodes: 4
- Edges: 3
- Is DAG: true

---

## Example 4: Chain Processing

**Description:** Sequential processing through multiple stages.

**Structure:**
```
Input → Text (stage1) → Text (stage2) → Text (stage3) → Output
```

**Steps to Create:**
1. Create Input node: "raw_data"
2. Create three Text nodes:
   - Stage 1: "Process {{raw_data}}"
   - Stage 2: "Refine {{stage1}}"
   - Stage 3: "Finalize {{stage2}}"
3. Create Output node: "final_result"
4. Connect sequentially

**Expected Analysis:**
- Nodes: 5
- Edges: 4
- Is DAG: true

---

## Example 5: Invalid Pipeline (Cycle)

**Description:** A pipeline that contains a cycle (not a valid DAG).

**Structure:**
```
Node A → Node B → Node C
  ↑                 ↓
  └─────────────────┘
```

**Steps to Create:**
1. Create three Text nodes (A, B, C)
2. Connect A → B
3. Connect B → C
4. Connect C → A (creates cycle)

**Expected Analysis:**
- Nodes: 3
- Edges: 3
- Is DAG: false ⚠️

**Note:** This demonstrates cycle detection working correctly.

---

## Example 6: Parallel Processing

**Description:** Single input splitting to multiple outputs.

**Structure:**
```
              → Output (result1)
Input → Text  → Output (result2)
              → Output (result3)
```

**Steps to Create:**
1. Create Input node: "data"
2. Create Text node: "{{data}}"
3. Create three Output nodes:
   - "result1"
   - "result2"
   - "result3"
4. Connect Text node to all three outputs

**Expected Analysis:**
- Nodes: 5
- Edges: 4
- Is DAG: true

---

## Example 7: Complex LLM Pipeline

**Description:** Multi-stage LLM processing with different prompts.

**Structure:**
```
Input (question) → Text (prompt1) → LLM1 → Text (refine) → LLM2 → Output (answer)
                                     ↑                        ↑
                   Text (system1) ──┘        Text (system2) ─┘
```

**Steps to Create:**
1. Create Input: "question"
2. Create two Text nodes for system prompts:
   - System1: "You are a researcher"
   - System2: "You are an editor"
3. Create Text for initial prompt: "Research: {{question}}"
4. Create first LLM node
5. Create Text for refinement: "Edit: {{llm1_response}}"
6. Create second LLM node
7. Create Output: "answer"
8. Connect appropriately

**Expected Analysis:**
- Nodes: 8
- Edges: 7
- Is DAG: true

---

## Example 8: Branching Pipeline

**Description:** Input that branches into separate processing paths.

**Structure:**
```
            → Text (path1) → Output (result1)
Input (data)
            → Text (path2) → Output (result2)
```

**Steps to Create:**
1. Create Input node: "data"
2. Create two Text nodes:
   - Path1: "Process A: {{data}}"
   - Path2: "Process B: {{data}}"
3. Create two Output nodes:
   - "result1"
   - "result2"
4. Connect:
   - Input → Text (path1) → Output (result1)
   - Input → Text (path2) → Output (result2)

**Expected Analysis:**
- Nodes: 5
- Edges: 4
- Is DAG: true

---

## Example 9: File Processing Pipeline

**Description:** Pipeline for processing file inputs.

**Structure:**
```
Input (file) → Text (metadata) → Output (processed)
             → Output (raw)
```

**Steps to Create:**
1. Create Input node:
   - Name: "file"
   - Type: File
2. Create Text node: "Metadata: {{file}}"
3. Create two Output nodes:
   - "raw": Type Text
   - "processed": Type Image
4. Connect appropriately

**Expected Analysis:**
- Nodes: 4
- Edges: 3
- Is DAG: true

---

## Example 10: Empty Pipeline

**Description:** Testing with no nodes.

**Structure:**
```
(empty canvas)
```

**Steps to Create:**
1. Don't add any nodes
2. Click Submit

**Expected Analysis:**
- Nodes: 0
- Edges: 0
- Is DAG: true

**Note:** An empty graph is technically a valid DAG.

---

## Testing Recommendations

1. Start with Example 1 to verify basic functionality
2. Progress to Example 2 to test LLM nodes
3. Try Example 5 to verify cycle detection works
4. Experiment with your own combinations
5. Test edge cases like disconnected nodes

## Variable Interpolation

In Text nodes, you can use the syntax `{{variable_name}}` to reference other nodes' outputs. This allows you to:
- Chain processing steps
- Combine multiple inputs
- Create dynamic prompts

Example:
```
Input named "username" → Text with "Hello {{username}}"
```

## Tips for Building Pipelines

1. Start with Input nodes on the left
2. Place Output nodes on the right
3. Use Text nodes to transform data
4. LLM nodes require both System and Prompt inputs
5. Avoid creating cycles
6. Test incrementally as you build
7. Use the MiniMap for navigation in large pipelines
8. Use the Controls to zoom and pan
9. Delete nodes by selecting and pressing Delete/Backspace
10. Save your work by submitting periodically

## Common Patterns

### Linear Flow
Best for simple transformations
```
Input → Process → Output
```

### Hub and Spoke
Good for distributing data
```
        → Output1
Input → → Output2
        → Output3
```

### Chain Processing
For multi-stage processing
```
Input → Stage1 → Stage2 → Stage3 → Output
```

### Merge Pattern
Combining multiple sources
```
Input1 ↘
         Processor → Output
Input2 ↗
```

### LLM Pattern
Standard LLM usage
```
System →  LLM → Output
Prompt → ↗
```

## Troubleshooting

**Issue:** Nodes won't connect
- Solution: Make sure you're dragging from output to input handles

**Issue:** Submit shows is_dag: false
- Solution: Check for cycles in your pipeline

**Issue:** Can't delete a node
- Solution: Select the node first, then press Delete or Backspace

**Issue:** Lost node on canvas
- Solution: Use the MiniMap to locate it or zoom out using Controls

**Issue:** Submit button not working
- Solution: Check that backend is running on port 8000

